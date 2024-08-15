import style from "@/components/kinds/KindOfFurniture.module.scss"
import Image from "next/image";
import {ImagePropsType} from "@/components/kinds/KindOfFurniture";

const Collage = ({images}: {
    images?: ImagePropsType[]
}) => {
    return (
        <div className={style.kind__images}>
            {images?.map(image => {
                return (
                    <div key={image.id} className={style.kind__figure_right}>
                        <Image className={style.kind__image}
                               src={image.src}
                               alt='image-of-furniture'
                               fill
                               sizes="(min-width: 200px) 50vw, 100vw"
                        />
                    </div>
                )
            })}
        </div>
    );
};

export default Collage;