const Shows = (props) => {
    return (
        <>
            <div className="masthead masthead-shows"></div>
            <div className="container txt-silver">
                <div className="row start-xs mt-2 mb-4 txt-silver bottom-xs">
                    <h1 className="m">Summer 2020</h1>
                </div>
                <hr />
                <div className="row start-xs mt-5 txt-silver">
                    <h5 className="">September 5th &mdash; Shooters on the Water, Cleveland</h5>
                </div>
                <div className="row my-5">
                    <p className="mx-3 txt-italic">
                        {' '}
                        <small>Unfortunately, we have had many COVID-19 cancellations.</small>{' '}
                    </p>
                </div>
            </div>
        </>
    );
};

export default Shows;
