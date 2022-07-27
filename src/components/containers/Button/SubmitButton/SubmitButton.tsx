import { IProps } from './types';
import { Button } from 'antd';

export const SubmitButton: React.FC<IProps> = ({
  loading,
  handleOnClick,
  buttonText,
}) => {
  return (
    <Button
      type="primary"
      loading={loading}
      onClick={handleOnClick}
      style={{ marginTop: 20 }}
      size="large"
      block
    >
      {buttonText}
    </Button>
  );
};
