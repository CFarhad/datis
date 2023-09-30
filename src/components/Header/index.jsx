import { memo } from "react"
import { Box, Flex, ScrollArea,Text, ThemeIcon,Image } from "@mantine/core"
import { useTranslation } from "react-i18next"
import fast_reservation from "../../assets/icons/fast_reservation.svg"
import whole_rooms from "../../assets/icons/whole_rooms.svg"
import prepared_guest from "../../assets/icons/prepared_guest.svg"
import empty_room from "../../assets/icons/empty_room.svg"
import temporary_occupation from "../../assets/icons/temporary_occupation.svg"
import occupation_room from "../../assets/icons/occupation_room.svg"
import havent_cleaned from "../../assets/icons/havent_cleaned.svg"
import maintenance from "../../assets/icons/maintenance.svg"
import today_entry from "../../assets/icons/today_entry.svg"
import today_exit from "../../assets/icons/today_exit.svg"
import garanty from "../../assets/icons/garanty.svg"
import messenger from "../../assets/icons/messenger.svg"


// "fast_reservation": "Fast Reservation",
// "whole_rooms": "Whole Rooms",
// "prepared_guest": "Prepared Guest",
// "empty_room": "Empty Room",
// "temporary_occupation": "Temporary Occupation",
// "occupation_room": "Occupation Room",
// "havent_cleaned": "Havent Cleaned",
// "maintenance": "Maintenance",
// "today_entry": "Today Entry",
// "today_exit": "Today Exit",
// "garanty": "Garanty",
// "messenger": "Messenger"



const Header = () => {

    const headers = [
        {title: "headers.fast_reservation",color:"#35C399",num: "01",icon: fast_reservation},
        {title: "headers.whole_rooms",color:"#004765E5",num: "50",icon: whole_rooms},
        {title: "headers.prepared_guest",color:"#52C8FD",num: "12",icon: prepared_guest},
        {title: "headers.empty_room",color:"#24B54F",num: "40",icon: empty_room},
        {title: "headers.temporary_occupation",color:"#0E3EE8CC",num: "00",icon: temporary_occupation},
        {title: "headers.occupation_room",color:"#FF4062CC",num: "10",icon: occupation_room},
        {title: "headers.havent_cleaned",color:"#FF9800CC",num: "03",icon: havent_cleaned},
        {title: "headers.maintenance",color:"#9A9A9A",num: "01",icon: maintenance},
        {title: "headers.today_entry",color:"#8606948C",num: "45",icon: today_entry},
        {title: "headers.today_exit",color:"#C00527BF",num: "20",icon: today_exit},
        {title: "headers.garanty",color:"#FF76E1",num: "12",icon: garanty},
        {title: "headers.messenger",color:"#7AE03B",num: "06",icon: messenger},
    ];
    return (
        <ScrollArea>
            <Flex w="100%" wrap="nowrap" align="center" justify="space-between" px={10} py={10}>
                {headers.map((header,index) => (
                    <MemoizedSection key={index} {...header} />
                ))}
            </Flex>
        </ScrollArea>
    )
}

const Section = ({icon,color,num,title}) => {
    const {t} = useTranslation();
    return (
        <Box miw="fit-content" mx="md" >
            <Flex direction="column" align="center">
                <ThemeIcon radius="xl" w={50} h={50} bg={color || "primary"} >
                    <Image src={icon} />
                </ThemeIcon>
                <Text mt={5} fz="xs" c="gray.6">{num}</Text>
                <Text ta="center" fz="xs" c="gray.6">{t(title)}</Text>
            </Flex>
        </Box>
    )
}

const MemoizedSection = memo(Section, (prevProps, nextProps) => {
    return prevProps.num === nextProps.num
})

export default Header