import React from 'react'
import styled from 'styled-components'
import { Box, Heading, Text } from 'grommet'

import { Button } from 'components'


const normalSection = ({ title, content, action }) => (
  <>
    <Heading
      level="3"
      margin={{ vertical: 'small' }}>
      {title}
    </Heading>
    <Box
      pad="medium"
      round="xsmall"
      border={{ size: 'small' }}>
      <Box
        direction="row"
        justify="between"
        align="center">
        <Text
          margin={{ vertical: 'xsmall' }}>
          {content}
        </Text>
        <Button
          hoverIndicator
          label={action.label}
          onClick={action.onClick}
          margin={{ horizontal: 'medium' }}
        />
      </Box>
    </Box>
  </>
)


const dangerSection = ({ title, content, action: { onClick, label } }) => (
  <>
    <Heading
      level="3"
      margin={{ vertical: 'small' }}
      color="status-critical">
      Danger Zone
    </Heading>
    <Box
      pad="medium"
      round="xsmall"
      border={{ color: 'status-critical', size: 'small' }}>
      <Heading
        level="4"
        margin={{ vertical: 'xsmall' }}
        alignSelf="start">
        {title}
      </Heading>
      <Box
        direction="row"
        justify="between"
        align="center">
        <Text
          margin={{ vertical: 'xsmall' }}>
          {content}
        </Text>
        <Button
          hoverIndicator
          color="status-critical"
          label={label}
          onClick={onClick}
          margin={{ horizontal: 'medium' }}
        />
      </Box>
    </Box>
  </>
)

const Section = ({ isDangerous, ...props }) => (
  <Box>
    {
      isDangerous
      ? dangerSection(props)
      : normalSection(props)
    }
  </Box>
)

export default Section
