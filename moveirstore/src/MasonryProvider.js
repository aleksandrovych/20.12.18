import React from "react";
import { render } from "react-dom";
import {
    CellMeasurer,
    CellMeasurerCache,
    createMasonryCellPositioner,
    Masonry
} from "react-virtualized";
import ImageMeasurer from "react-virtualized-image-measurer";
import {Grid, Label, Icon, Container, Progress} from 'semantic-ui-react'

import {Link} from 'react-router-dom'

// Array of images with captions
//const list = [{image: 'http://...', title: 'Foo'}];

// We need to make sure images are loaded from scratch every time for this demo
const noCacheList = list => list.map((item, index) => ({
    title: index + ". " + item.title,
    image: item.image + (item.image ? "?noCache=" + Math.random() : "")
}));

const keyMapper = (item, index) => item.image || index;

const columnWidth = 250;
const defaultHeight = 700;
const defaultWidth = columnWidth;
const defaultSpacer = 30;
const imageHeight = 380;

// Default sizes help Masonry decide how many images to batch-measure
const cache = new CellMeasurerCache({
    imageHeight,
    defaultWidth,
    fixedWidth: true
});

const createCellPositionerConfig = width => {
    return {
        cellMeasurerCache: cache,
        columnCount: width < 1055 ? (width < 771 ? (width < 492 ? 1 : 2) : 3) : 4,
        columnWidth,
        spacer: defaultSpacer
    }
}

const createMasonryCellPositionerProxy = (width) => {
    return createMasonryCellPositioner(createCellPositionerConfig(width))
}

const workWithText = (text) => {
    if (text === undefined) {
        return ""
    }

    if (text === "Science Fiction") {
        return "Sci-Fy";
    }

    if (text.length > 5) {
        return text.slice(0, 5)
    }

    return text
}

const MasonryComponent = ({ itemsWithSizes, setRef, width }) => {

    const cellPositioner = createMasonryCellPositionerProxy(width);


    const cellRenderer = ({ index, key, parent, style }) => {
        const { item, size } = itemsWithSizes[index];
        const height = imageHeight;
        return (
            <CellMeasurer
                cache={cache}
                index={index}
                key={item.id}
                parent={parent} >
            <div style={{...style, ...{border: "2px double grey", height: defaultHeight-216}}}>
                <Link to={"/movie/"+item.id} /*target={type === 'search'? '_blank' : null}*/>

                {(
        <img
            src={item !== null && item.poster !== null  ? 'https://image.tmdb.org/t/p/w500'+item.poster : 'https://cdn.sstatic.net/Sites/stackoverflow/img/404.svg'}
            alt={'No films'}
            style={{
            height: height,
                width: columnWidth - 4,
                objectFit: "fill",
                display: "block"
        }}
            />
        )}

        <div style={{maxHeight: "20px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", paddingLeft: "10px", paddingRight: "10px", marginTop: "5px", marginBottom: "10px", font: "bold 130% serif", color: "#008080"}}>{item.title}</div>
                <Container>
                    <div style={{paddingLeft: "10px", marginBottom: "10px", overflowX: "scroll", maxHeight: "21px",}}>
                        {  item.genres[0] != undefined && <Label size="tiny" as='a' tag>{workWithText(item.genres[0])}</Label>}
                        {  item.genres[1] != undefined && <Label size="tiny" as='a' color='red' tag>{workWithText(item.genres[1])}</Label>}
                        {  item.genres[2] != undefined && <Label size="tiny" as='a' color='teal' tag>{workWithText(item.genres[2])}</Label>}
                    </div>
                </Container>
                <div style={{paddingLeft: "10px", paddingRight: "10px",}}>
                <Progress color={(item.rating < 3.0 ? "red" : (item.rating < 6.0 ? "yellow" : "green"))} percent={item.rating * 10} size='small'>
                    Rating
                </Progress>
                </div>
                </Link>

    </div>
        </CellMeasurer>
    );
    };

    return (
        <Masonry
    cellCount={itemsWithSizes.length}
    cellMeasurerCache={cache}
    cellPositioner={cellPositioner}
    cellRenderer={cellRenderer}
    height={2600}
    width={width+50}
    keyMapper={keyMapper}
    ref={setRef}
    />
);
};

class Index extends React.Component {

    masonryRef = null;

    constructor(props) {
        super(props)

        if (props.list != null && props.list.length > 0) {
            cache.clearAll();
           // cellPositioner.reset(cellPositionerConfig);

            if (this.masonryRef != null) {
                this.masonryRef.clearCellPositions();

            }

            this.state = {images: noCacheList(props.list)};
        }
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        cache.clearAll();
       // cellPositioner.reset(cellPositionerConfig);
        this.masonryRef.clearCellPositions();
        this.state = {images: noCacheList(nextProps.list)};
    }


    setMasonry = node => (this.masonryRef = node);

    render() {
        return (
                        <ImageMeasurer
                            items={this.props.list}
                            image={item => item.image}
                            keyMapper={keyMapper}
                            onError={(error, item, src) => {
                                console.error(
                                    "Cannot load image",
                                    src,
                                    "for item",
                                    item,
                                    "error",
                                    error
                                );
                            }}
                            defaultHeight={defaultHeight}
                            defaultWidth={defaultWidth}
                        >
                            {({ itemsWithSizes, sizes }) => (
                                <MasonryComponent
                                    width={this.props.width}
                                    setRef={this.setMasonry}
                                    itemsWithSizes={itemsWithSizes}
                                />
                            )}
                        </ImageMeasurer>
                        );
    }
}

export default Index;