import { useState } from 'react';
import axios from 'axios';

const usePost = (data) => {
  const [estate, setEstate] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleCreate = async () => {
    setLoading(true);
    try {
      const res = await axios.post(data.url, data.body);
      setEstate(res.data.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  return { estate, error, loading, handleCreate };
};

export default usePost;
