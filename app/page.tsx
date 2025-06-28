'use client'
import Image from "next/image";
import { FC, useState } from "react";

const images = [
    { src: "https://picsum.photos/id/1018/1920/1080/" },
    { src: "https://picsum.photos/id/1011/1920/1080/" },
    { src: "https://picsum.photos/id/1012/1920/1080/" },
    { src: "https://picsum.photos/id/1013/1920/1080/" },
    { src: "https://picsum.photos/id/1014/1920/1080/" },
    { src: "https://picsum.photos/id/1015/1920/1080/" },
    { src: "https://picsum.photos/id/1016/1920/1080/" },
    { src: "https://picsum.photos/id/1019/1920/1080/" },
    { src: "https://picsum.photos/id/1020/1921/1080/" },
    { src: "https://picsum.photos/id/1020/1922/1080/" },
    { src: "https://picsum.photos/id/1020/1923/1080/" },
    { src: "https://picsum.photos/id/1020/1924/1080/" },
    { src: "https://picsum.photos/id/1020/1925/1080/" },
    { src: "https://picsum.photos/id/1020/2926/1080/" },
];

type LithiumGalleryProps = {
    images: LithiumGalleryImageProps[];
};

type LithiumGalleryImageProps = {
    imageUrl: string;
    alt: string;
    ratio: number;
};

type LithiumGalleryImageControlsProps = {
    caption: string;
    isSelected?: boolean;
    selectionChanged: (imageUrl: string) => void;
}

const LithiumGalleryImageControls: FC<LithiumGalleryImageControlsProps> = ({
    caption,
    isSelected,
    selectionChanged
}) => {
    const [selected, setSelected] = useState(isSelected || false);
    return <div className="relative top-[-100px] left-0 p-2 rounded shadow-md">
        <div>
            {caption}<br />
            <button className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={() => {
                    setSelected((value) => !value);
                    selectionChanged(caption);
                }}>
                {selected ? "Wybrane" : "Wybieram"}
            </button>
        </div>
    </div>;
}

type LedIndicatorProps = {
    isOn?: boolean;
}

const LedIndicator: FC<LedIndicatorProps> = ({ isOn }) => {
    return (<>
        {isOn && (<svg width="24" height="24" viewBox="0 0 24 24" aria-label="Red LED On" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" fill="#ff0000" stroke="#b30000" strokeWidth="2" />
            <circle cx="12" cy="12" r="6" fill="#ff6666" opacity="0.7" />
            <ellipse cx="14" cy="10" rx="2" ry="1" fill="#fff" opacity="0.5" />
            <circle cx="12" cy="12" r="3" fill="#fff" opacity="0.2" />
        </svg>
        )}
        {!isOn && (<svg width="24" height="24" viewBox="0 0 24 24" aria-label="Red LED Off" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" fill="#ccc" stroke="#888" strokeWidth="2" />
            <circle cx="12" cy="12" r="6" fill="#eee" opacity="0.7" />
            <ellipse cx="14" cy="10" rx="2" ry="1" fill="#fff" opacity="0.3" />
            <circle cx="12" cy="12" r="3" fill="#fff" opacity="0.1" />
        </svg>
        )}
    </>);
}

const LithiumGalleryImage: FC<LithiumGalleryImageProps> = ({ imageUrl, alt, ratio }) => {
    const [controlsVisible, setControlsVisible] = useState(false);
    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    const width = 300;
    const height = width * ratio;
    const ledIndicatorTop = Math.ceil(height / 2) - 10;
    return (
        <div key={imageUrl}
            onMouseEnter={() => setControlsVisible(true)}
            onMouseLeave={() => setControlsVisible(false)}>
            <Image src={imageUrl} alt={alt} width={width} height={height} />
            <div className={`relative top-[-${ledIndicatorTop}px] left-3 p-2 rounded`}>
                <LedIndicator isOn={selectedItems.includes(imageUrl)} />
            </div>
            {
                controlsVisible && <LithiumGalleryImageControls caption="Ala ma kota..."
                    isSelected={selectedItems.includes(imageUrl)}
                    selectionChanged={() => {
                        setSelectedItems((prev) => {
                            if (prev.includes(imageUrl)) {
                                return prev.filter(item => item !== imageUrl);
                            } else {
                                return [...prev, imageUrl];
                            }
                        });
                    }} />
            }
        </div >
    );
};

const LithiumGallery: FC<LithiumGalleryProps> = ({ images }) => {
    return <div className="flex flex-wrap gap-4">
        {
            images.map(img =>
                <LithiumGalleryImage key={img.imageUrl}
                    imageUrl={img.imageUrl}
                    alt={img.alt}
                    ratio={img.ratio} />
            )
        }
    </div>;
}

export default function Page() {
    return (<>
        <LithiumGallery images={images?.map(img => ({
            imageUrl: img.src,
            alt: `Image url: ${img.src}`,
            ratio: 3 / 5
        }))} />
    </>)
}

