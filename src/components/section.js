import React from 'react'
import styled from 'styled-components'
import { Box, Heading, Text } from 'grommet'

import { Button } from 'components'


const normalSection = ({ title, description, action, content, extra = null }) => (
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
        align="center"
        justify="between"
        gap="small">
        <Box>
          <Text margin={{ vertical: 'xsmall' }}>
            {description}
          </Text>
        </Box>
        <Box width="250px">
          <Button
            fill
            hoverIndicator
            label={action.label}
            onClick={action.onClick} />
        </Box>
      </Box>
      {
        content && (
          <>{ content }</>
        )
      }
    </Box>
  </>
)


const dangerSection = ({ title, description, action: { onClick, label } }) => (
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
        align="center"
        gap="small">
        <Box>
          <Text margin={{ vertical: 'xsmall' }}>
            {description}
          </Text>
        </Box>
        <Box width="150px">
          <Button
            fill
            hoverIndicator
            color="status-critical"
            label={label}
            onClick={onClick}/>
        </Box>
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
