import axios from 'axios';
import { useEffect, useState } from 'react';
import { ITagListResponse } from '../interfaces/post';

const useTags = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(undefined);

  useEffect(() => {
    const handleGetTagList = async () => {
      setLoading(true);

      try {
        const { data } = await axios.get<ITagListResponse>(`/preview/tag`);
        const { tagList } = data;
        setTags(tagList);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    handleGetTagList();
  }, []);

  return { tags, loading, error, setTags };
};

export default useTags;
