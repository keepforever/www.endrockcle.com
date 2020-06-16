import ExperienceItem from '../comps/ExperienceItem';

const experienceConfig = [
    {
        duration: 'April 2019 - Present',
        jobTitle: 'React Developer',
        company: {
            name: 'Findaway',
            state: 'OH',
            city: 'Solon'
        },
        abstract:
            'Development at Findaway is segmented into 2 month cycles, split into “support”, or “new development”. I have supported multiple apps as well as built and deployed some apps from scratch. Most new development work has been create-react-app’s, while the support work has been mostly react along with some vanilla html/css. The new applications I have built relied on AWS Amplify and Cognito to manage authentication.',
        accomplishments: [
            {
                title: 'Enhance Voices',
                description: 'I did good things.'
            },
            {
                title: 'Chaptering Tool',
                description: 'I did good things.'
            },
            {
                title: 'Partner Portal',
                description: 'I did good things.'
            },
            {
                title: 'AWS Cognito Auth',
                description: 'I did good things.'
            }
        ],
        techSoup: ['React', 'Redux', 'GatsbyJS', 'Axios', 'Sass', 'JIRA', 'react-router', 'AWS', 'AWS Cognito', 'React Hooks']
    },
    {
        duration: 'April 2019 - Present',
        jobTitle: 'React Developer',
        company: {
            name: 'Findaway',
            state: 'OH',
            city: 'Solon'
        },
        abstract:
            'Development at Findaway is segmented into 2 month cycles, split into “support”, or “new development”. I have supported multiple apps as well as built and deployed some apps from scratch. All the new development work have been create-react-app’s, while the support work has been mostly react along with some vanilla html/css. The new applications I have built relied on AWS Amplify and Cognito to manage authentication.',
        accomplishments: [
            {
                title: 'Enhance Voices',
                description: ''
            },
            {
                title: 'Chaptering Tool',
                description: ''
            },
            {
                title: 'Partner Portal',
                description: ''
            },
            {
                title: 'AWS Cognito Auth',
                description: ''
            }
        ],
        techSoup: ['React', 'Redux', 'GatsbyJS', 'Axios', 'Sass', 'JIRA', 'react-router', 'AWS', 'AWS Cognito', 'React Hooks']
    },
    {
        duration: 'April 2019 - Present',
        jobTitle: 'React Developer',
        company: {
            name: 'Findaway',
            state: 'OH',
            city: 'Solon'
        },
        abstract:
            'Development at Findaway is segmented into 2 month cycles, split into “support”, or “new development”. I have supported multiple apps as well as built and deployed some apps from scratch. All the new development work have been create-react-app’s, while the support work has been mostly react along with some vanilla html/css. The new applications I have built relied on AWS Amplify and Cognito to manage authentication.',
        accomplishments: [
            {
                title: 'Enhance Voices',
                description: ''
            },
            {
                title: 'Chaptering Tool',
                description: ''
            },
            {
                title: 'Partner Portal',
                description: ''
            },
            {
                title: 'AWS Cognito Auth',
                description: ''
            }
        ],
        techSoup: ['React', 'Redux', 'GatsbyJS', 'Axios', 'Sass', 'JIRA', 'react-router', 'AWS', 'AWS Cognito', 'React Hooks']
    }
];

const experience = props => {
    return (
        <div style={{ flex: 1 }}>
            {experienceConfig.map(item => {
                return <ExperienceItem {...item} key={Math.random() + '_experience-item'} />;
            })}
        </div>
    );
};

export default experience;
