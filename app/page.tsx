'use client'
import { IconButton, ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import Image from "next/image";
import InfoIcon from '@mui/icons-material/Info';
import { images } from "./images";

export default function Page() {
    return (<>
        <ImageList variant="masonry" sx={{ sm: {} }} cols={4}>
            {images.map((item) => (
                <ImageListItem key={item.src}>
                    <Image
                        src={item.src}
                        alt={`Image url: ${item.src}`}
                        width={item.width}
                        height={item.height}
                    />
                    <ImageListItemBar
                        title={item.caption}
                        subtitle={item.author}
                        actionIcon={
                            <IconButton
                                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                aria-label={`info about ${item.src}`}
                            >
                                <InfoIcon />
                            </IconButton>
                        }
                    />
                </ImageListItem>
            ))}
        </ImageList>
    </>)
}

