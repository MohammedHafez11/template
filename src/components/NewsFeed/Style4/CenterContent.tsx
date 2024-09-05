import React, { useEffect, useState } from "react";
import CreatePost from "@/Common/CreatePost";
import SufiyaElizaTwoPhotoPost from "./SufiyaElizaTwoPhotoPost";

import { Post } from "@/redux-toolkit/models/postModel";
import { ReadDto } from "@/redux-toolkit/models/searchModel";
import { PostService } from "@/redux-toolkit/services/PostService";
import { useSession } from "next-auth/react";
import useDebounce from "@/components/hooks/useDebounce"; // Import custom debounce hook
 
const CenterContent: React.FC = () => {
  const { data: session } = useSession();
  const accessToken = "Bearer " + session?.user?.access_token;
  const postService = new PostService();
  const { useLazyGetAllQuery } = postService.Apis(accessToken);

  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  // const [array, setArray] = useState<Post[]>([]);

  const [triggerGetAll, { data: fetchedData, isLoading }] = useLazyGetAllQuery();
  
  const fetchPosts = async (pageNumber: number) => {
    const postquery = new ReadDto<Post>();
    postquery.sortColumn = "dateTime";
    postquery.sortColumnDirection = "desc";
    postquery.page = pageNumber;
    postquery.pageSize = 10;
 
    setLoading(true);
    try {
      await triggerGetAll({ ...postquery });
    } finally {
      setLoading(false);
    }
  };


  // var posta = new Post();

  // array.push(posta);
 
  // posta.content='a7a'


  useEffect(() => {
    if (fetchedData) {
      const newPosts = fetchedData?.data?.listData || [];
      if (newPosts.length === 0) {
        setHasMore(false);
      } else {
        // setPosts((prevPosts) => [...array,...prevPosts, ...newPosts]);
        setPosts((prevPosts) => [...prevPosts, ...newPosts]);
      }
    
    }
  }, [fetchedData]);

  useEffect(() => {
    if (hasMore) {
      fetchPosts(page);
    }
  }, [page]);

  const handleScroll = useDebounce(() => {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 500 && !loading && hasMore) {
      console.log("Loading more posts");
      setPage((prevPage) => prevPage + 1);
    }
  }, 300);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll, loading, hasMore]);

  return (
    <div className="content-center">
      <CreatePost />
      <div className="overlay-bg" />
      <div className="post-panel infinite-loader-sec section-t-space">
        {posts.map((item) => (
          <SufiyaElizaTwoPhotoPost key={item.id} item={item} />
        ))}
      </div>
      {loading && <p className="text-center mt-2 text-black dark:text-[#fff]">Loading more posts...</p>}
      {!hasMore && <p className="text-center mt-2 text-black dark:text-[#fff]">No more posts available</p>}
    </div>
  );
};

export default CenterContent;