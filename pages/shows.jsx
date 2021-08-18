const Shows = (props) => {
    return (
        <>
            <div className="masthead masthead-shows"></div>
            <div className="container txt-silver">
                <div className="row start-xs mt-2 mb-4 txt-silver bottom-xs">
                    <h1 className="m">Summer 2021</h1>
                </div>
                <hr />

                <div className="row start-xs mt-5 txt-silver">
                    <h4 className="">
                        August 27th &mdash;{' '}
                        <a
                            className="txt-larger show-location"
                            rel="download noopener noreferrer"
                            target="_blank"
                            href="https://www.collisionbendbrewery.com/"
                        >
                            Collision Bend Brewery
                        </a>{' '}
                        &mdash; Cleveland &mdash; 8:00p - 11:00p{' '}
                    </h4>
                </div>
                <div className="row start-xs mt-5 txt-silver">
                    <h4 className="">
                        September 4th &mdash;{' '}
                        <a
                            className="txt-larger show-location"
                            rel="download noopener noreferrer"
                            target="_blank"
                            href="https://mcarthursbrewhouse.com/"
                        >
                            {' '}
                            McArthur's Brew House{' '}
                        </a>{' '}
                        &mdash; 2721 Front St, Cuyahoga Falls, OH 44221 &mdash; 6:30p - 10:30p{' '}
                    </h4>
                </div>

                <div className="row start-xs mt-2 mb-4 txt-silver bottom-xs">
                    <h1 className="m">Winter 2022</h1>
                </div>
                <hr />

                <div className="row start-xs mt-5 txt-silver">
                    <h4 className="">
                        January 15th &mdash;{' '}
                        <a
                            className="txt-larger show-location"
                            rel="download noopener noreferrer"
                            target="_blank"
                            href="https://www.frontst.social/"
                        >
                            Front St. Social
                        </a>{' '}
                        &mdash; Berea &mdash; 8:00p - 11:00p{' '}
                    </h4>
                </div>
            </div>
        </>
    );
};

export default Shows;
