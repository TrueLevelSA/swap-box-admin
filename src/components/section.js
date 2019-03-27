import React from 'react'
import styled from 'styled-components'
import { Box, Heading, Paragraph } from 'grommet'

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
      border={{size: 'small' }}>
      {/*<Heading
        level="4"
        margin={{ vertical: 'xsmall' }}
        alignSelf="start">
        {title}
      </Heading>*/}
      <Box
        direction="row"
        justify="between"
        align="center">
        <Paragraph
          margin={{ vertical: 'xsmall' }}>
          {content}
        </Paragraph>
        <Button
          hoverIndicator
          label={action.label}
          onClick={action.onSubmit}
          margin={{ horizontal: 'medium' }}
        />
      </Box>
    </Box>
  </>
)


const dangerSection = ({ title, content, action }) => (
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
        <Paragraph
          margin={{ vertical: 'xsmall' }}>
          {content}
        </Paragraph>
        <Button
          hoverIndicator
          color="status-critical"
          label={action.label}
          onClick={action.onSubmit}
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
