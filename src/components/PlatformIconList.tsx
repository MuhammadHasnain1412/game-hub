import React from 'react'
import { Platform } from '../Hooks/useGames'
import { HStack, Icon } from '@chakra-ui/react'
import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from "react-icons/fa"
import { MdPhoneIphone } from 'react-icons/md'
import { SiNintendo } from 'react-icons/si'
import { BsGlobe } from 'react-icons/bs'
import { IconType } from 'react-icons'

interface PlatformIcons {
    platforms: Platform[]
}

const PlatformIconList = ({ platforms }: PlatformIcons) => {
    const iconMap: { [key: string]: IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        mac: FaApple,
        android: FaAndroid,
        nintendo: SiNintendo,
        linux: FaLinux,
        ios: MdPhoneIphone,
        web: BsGlobe
    }
    return (
        <HStack marginY={1}>
            {platforms.map((platform) => (<Icon as={iconMap[platform.slug]} color={'gray.500'}/>))}
        </HStack>
    )
}

export default PlatformIconList
