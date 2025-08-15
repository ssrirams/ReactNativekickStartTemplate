import React, {useEffect, useState} from 'react';
import {Button, Text} from '../../../../@common/components/Index';
import {ButtonHierarchy} from '../../../../@common/components/button/enums';
import {TextHierarchy} from '../../../../@common/components/text/enums';
import useLoginMutation from '../network/hooks/useLoginHooks';

const LoginScreen = () => {
  const {mutate, isLoading, error, data} = useLoginMutation();
  const [userData, setUserData] = useState(data);
  const handleLogin = () => {
    mutate({username: 'test', password: 123});
  };
  useEffect(() => {
    setUserData(data);
  }, [data]);
  return (
    <>
      <Button
        onPress={() => {
          handleLogin();
        }}
        type={ButtonHierarchy.Primary}>
        <Text type={TextHierarchy.Body}>Login</Text>
      </Button>
      {isLoading && <Text type={TextHierarchy.Body}>Loading...</Text>}
      {error && <Text type={TextHierarchy.Body}>Error</Text>}
      <Text type={TextHierarchy.Body}>{JSON.stringify(userData)}</Text>
    </>
  );
};

export default LoginScreen;
