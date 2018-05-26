import React from 'react';
import { Alert } from 'reactstrap';
import { Typeahead } from 'react-bootstrap-typeahead';

const PostsFilter = ({
  users,
  selectedUser,
  fetching,
  error,
  onChange,
  className,
}) => {

  if (fetching) {
    return <div>loading...</div>;
  }

  if (error) {
    return <Alert color="danger">{error}</Alert>
  }
  if (!users) {
    return null;
  }

  const options = users.map(({ id, name }) => ({ id, label: name }));

  return (
    <div className={className}>
      <Typeahead
        onChange={onChange}
        options={options}
        selected={selectedUser}
        placeholder="Filter by user..."
        clearButton
      />
    </div>
  );
}

export default PostsFilter;

