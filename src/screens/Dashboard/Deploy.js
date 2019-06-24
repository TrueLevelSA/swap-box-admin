import React from 'react';
import { Redirect } from 'react-router-dom';
import { Box, Heading, Paragraph } from 'grommet';
import { connect } from 'react-redux';

import { Button } from 'components';
import { deployContract } from 'store';

function Deploy({ hasContract, deployContract }) {
  const deploy = async () => {
    await deployContract();
  };

  if (hasContract) {
    return <Redirect to="/dashboard/admin" />;
  }

  return (
    <Box fill align="center" justify="center">
      <Box direction="column" align="center">
        <Heading level="3">Deploy Contract</Heading>
        <Paragraph textAlign="center">
          This address doesn't own a contract yet. Please select a Metamask
          account with an existing contract or deploy a new one.
        </Paragraph>
        <Button
          size="small"
          margin={{ vertical: 'medium' }}
          label="Create Contract"
          onClick={deploy}
          primary
        />
      </Box>
    </Box>
  );
}

const mapStateToProps = ({ data }) => ({
  hasContract: data.hasContract,
});

const mapDispatchToProps = dispatch => ({
  deployContract: () => dispatch(deployContract()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Deploy);
