import React from 'react';
import { Text, Box, Link } from '@chakra-ui/core';
import CountDown from './CountDown';
import { shortEther, toBN, toWei } from '../utils';
import { META } from '../config';

export default function StartTimer({ startTime, accessTime, stakingLid }) {
  return (
    <Box
      display="block"
      w="100%"
      mt="40px"
      mb="40px"
      pl={{ base: '20px', lg: '0px' }}
      pr={{ base: '20px', lg: '0px' }}
      maxW="1200px"
      ml="auto"
      mr="auto"
      textAlign="center">
      <Text fontSize={{ base: '28px', sm: '36px' }} fontWeight="bold">
        {`Your ${META.TOKEN_SYMBOL} Access Starts In:`}
      </Text>
      <CountDown expiryTimestamp={accessTime} />
      <Text>
        Stake more LID at{' '}
        <Link
          color="lid.brand"
          target="_blank"
          rel="noreferrer noopener"
          href="https://stake.lid.sh">
          stake.lid.sh
        </Link>{' '}
        to get access sooner.
      </Text>
      <Text>
        Your {shortEther(stakingLid)} staked LID gets you access{' '}
        {(
          toBN(startTime)
            .add(toBN('86400000'))
            .sub(toBN(accessTime))
            .div(toBN('3600'))
            .toNumber() / 1000
        ).toFixed(2)}{' '}
        hours early.
      </Text>
    </Box>
  );
}
