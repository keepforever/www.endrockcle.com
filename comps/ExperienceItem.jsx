const ExperienceItem = props => {
    return (
        <div style={{ maxWidth: '980px' }} className="container frosted-glass mb-6">
            {/* Row 1 */}
            <div className="row mb-2 pt-3">
                <div className="col-xs-12">
                    <div className="row display-flex-between">
                        <h3>{`${props.jobTitle} @ ${props.company.name}: ${props.company.city}, ${props.company.state}`}</h3>
                        <p className="mb-0">{props.duration}</p>
                    </div>
                </div>
            </div>

            <div className="row mb-2">
                <div className="col-xs-12">{props.abstract}</div>
            </div>

            {/* Row 2 */}
            <div className="row ">
                <div className="col-xs-12">
                    <h4 className="txt-underline">Accomplishments</h4>
                </div>
            </div>

            {props.accomplishments.map((a, index) => {
                return (
                    <>
                        <div className="row">
                            <div className="col-xs-12">
                                <h5>{a.title}</h5>

                                <p className="pl-4">{a.description}</p>
                            </div>
                        </div>
                    </>
                );
            })}

            {/* Row 3 */}
            <div className="row">
                <div className="col-xs-12">Tech Soup</div>
            </div>
        </div>
    );
};

export default ExperienceItem;
