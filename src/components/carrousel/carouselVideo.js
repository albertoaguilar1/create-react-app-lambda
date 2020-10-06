
var React = require('react');
var ReactDOM = require('react-dom');
var Carousel = require('react-responsive-carousel').Carousel;

var DemoCarouselVideos = React.createClass({
    render() {
        return (
            <Carousel showThumbs={false}>
                <div>
                    <iframe width="1600" height="900" src="https://www.youtube.com/embed/n0F6hSpxaFc" />
                </div>

                <div>
                    <iframe width="1600" height="900" src="https://www.youtube.com/embed/C-y70ZOSzE0" />
                </div>

                <div>
                    <iframe width="1600" height="900" src="https://www.youtube.com/embed/IyTv_SR2uUo" />
                </div>

                <div>
                    <iframe width="1600" height="900" src="https://www.youtube.com/embed/3zrfGHQd4Bo" />
                </div>
            </Carousel>
        );
    }
});

ReactDOM.render(<DemoCarouselVideos />, document.querySelector('.demo-carousel-videos'));