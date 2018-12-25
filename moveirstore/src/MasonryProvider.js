import React from "react";
import { render } from "react-dom";
import {
    CellMeasurer,
    CellMeasurerCache,
    createMasonryCellPositioner,
    Masonry
} from "react-virtualized";
import ImageMeasurer from "react-virtualized-image-measurer";

// Array of images with captions
//const list = [{image: 'http://...', title: 'Foo'}];

// We need to make sure images are loaded from scratch every time for this demo
const noCacheList = list => list.map((item, index) => ({
    title: index + ". " + item.title,
    image: item.image + (item.image ? "?noCache=" + Math.random() : "")
}));

const keyMapper = (item, index) => item.image || index;

const columnWidth = 250;
const defaultHeight = 540;
const defaultWidth = columnWidth;
const defaultSpacer = 30;
const imageHeight = 380;

// Default sizes help Masonry decide how many images to batch-measure
const cache = new CellMeasurerCache({
    defaultHeight,
    defaultWidth,
    fixedWidth: true
});

// Our masonry layout will use 3 columns with a 10px gutter between
const cellPositionerConfig = {
    cellMeasurerCache: cache,
    columnCount: 4,
    columnWidth,
    spacer: defaultSpacer
};

const cellPositioner = createMasonryCellPositioner(cellPositionerConfig);

const MasonryComponent = ({ itemsWithSizes, setRef }) => {
    const cellRenderer = ({ index, key, parent, style }) => {
        const { item, size } = itemsWithSizes[index];
        const height = imageHeight;

        return (
            <CellMeasurer
                cache={cache}
                index={index}
                key={key}
                parent={parent} >
            <div style={{...style, ...{border: "2px double grey"}}}>
            <div>{item.title}</div>
        {(
        <img
            src={(console.log('https://image.tmdb.org/t/p/w500'+item.poster), 'https://image.tmdb.org/t/p/w500'+item.poster)}
            alt={'https://cdn.sstatic.net/Sites/stackoverflow/img/404.svg'}
            style={{
            height: height,
                width: columnWidth,
                objectFit: "contain",
                display: "block"
        }}
            />
        )}
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
    height={defaultHeight * 5 + defaultSpacer * 4}
    width={1100}
    keyMapper={keyMapper}
    ref={setRef}
    />
);
};

class Index extends React.Component {

    constructor(props) {
        super(props)

        this.state = { images: noCacheList(this.props.list)};
    }


    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.list != prevState.images) {
            return {...prevState, images: nextProps.list}
        }

        return null;
    }

    masonryRef = null;

    // this shows how to significantly change the input array, if items will be only appended this recalculation is not needed
    shorten = () => {
        cache.clearAll();
        cellPositioner.reset(cellPositionerConfig);
        this.masonryRef.clearCellPositions();
        this.setState({ images: [...this.state.images.slice(1)] });
    };

    setMasonry = node => (this.masonryRef = node);

    render() {
        return (
            <div>
            <ImageMeasurer
        items={this.state.images}
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
            {({ itemsWithSizes }) => (
        <MasonryComponent
        setRef={this.setMasonry}
        itemsWithSizes={itemsWithSizes}
        />
    )}
    </ImageMeasurer>
        </div>
    );
    }
}

export default Index;