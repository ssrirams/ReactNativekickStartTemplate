import {useMutation} from '@tanstack/react-query';
import {loginApi} from '../apiCalls/LoginApi';

const useLoginMutation = () => {
  const {mutate, isLoading, error, data} = useMutation(loginApi);

  return {
    mutate,
    isLoading,
    error,
    data,
  };
};

export default useLoginMutation;
