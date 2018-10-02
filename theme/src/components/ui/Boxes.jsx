import React from 'react'
import Box from '../../../../src/components/CenterBox'
import Text from '../../../../src/components/Text'

const Boxes = ({ colors }) => {
  return Object.keys(colors).map((k, i) => (
    <Box
      className='fl'
      fontSize={5}
      p={2}
      height={100}
      width={100}
      key={i}
      bg={colors[k]}
    >
      <Text fontWeight='bold'>{k}</Text>
    </Box>
  ))
}

export default Boxes
