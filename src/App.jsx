
const initialIssues = [
    {
    id: 1, status: 'New', FirstName: 'Sidharth', LastName:'Shukla',effort: 5,
    created: new Date('2018-08-15'), due: undefined,
    title: 'Error in console when clicking Add',
    },
    {
    id: 2, status: 'Assigned', FirstName: 'Akash',LastName:'Pandey', effort: 14,
    created: new Date('2018-08-16'), due: new Date('2018-08-30'),
    title: 'Missing bottom border on panel',
    },
    {
        id: 3, status: 'Assigned', FirstName: 'Srishti',LastName:'Arora', effort: 11,
    created: new Date('2018-08-18'), due: new Date('2018-07-13'),
    title: 'Missing Outline',
    },
    {
        id: 4, status: 'New', FirstName: 'Amala',LastName:'Shrivastava',effort: 17,
        created: new Date('2018-04-18'), due: new Date('2019-07-10'),
        title: 'Missing document',
    }
   ];

   const sampleIssue = {
    status: 'New', owner: 'Pieta',
    title: 'Completion date should be optional',
   }


class IssueFilter extends React.Component {
    render() {
    return (
    <div>This is a placeholder for the issue filter.</div>
    );
    }
   }

class IssueTable extends React.Component {
    constructor()
        {
            super();
            this.state = { issues: [] };
            setTimeout(() => {
                this.createIssue(sampleIssue);
                }, 2000);
        }
         componentDidMount()
          {
            this.loadData();
            }
            loadData() 
            {
            setTimeout(() => {
            this.setState({ issues: initialIssues });
            }, 500);
            }

            createIssue(issue) {
                issue.id = this.state.issues.length + 1;
                issue.created = new Date();
                const newIssueList = this.state.issues.slice();
                newIssueList.push(issue);
                this.setState({ issues: newIssueList });
                }
               

    render() {

        

         const issueRows = this.state.issues.map(issue =>
    <IssueRow key={issue.id} issue={issue} />
    );
    return (
    <table align="center" className="bordered-table" >
    <thead>
    <tr>
    <th>ID</th>
    <th>Status</th>
    <th>Owner FirstName</th>
    <th>Owner LastName</th>
    <th>Created</th>
    <th>Effort</th>
    <th>Due Date</th>
    <th>Title</th>
    </tr>
    </thead>
    <tbody>
    {issueRows}
    </tbody>
    </table>
    );
    }
   }

   class IssueAdd extends React.Component {
    render() {
    return (
    <div>This is a placeholder for a form to add an issue.</div>
    );
    }
   }
   class IssueList extends React.Component {
    render() {
    return (
    <React.Fragment>
    <h1><u>ISSUE TRACKER</u></h1>
    <IssueFilter />
   
    <IssueTable />
    
    <IssueAdd />
    </React.Fragment>
    );
    }
   }
   class IssueRow extends React.Component {
    render() {
    const issue = this.props.issue;
    return (
    <tr>
    <td>{issue.id}</td>
    <td>{issue.status}</td>
    <td>{issue.FirstName}</td>
    <td>{issue.LastName}</td>
    <td>{issue.created.toDateString()}</td>
    <td>{issue.effort}</td>
    <td>{issue.due ? issue.due.toDateString() : ''}</td>
    <td>{issue.title}</td>
    </tr>
    );
    }
   }
   const element = <IssueList />;
   ReactDOM.render(element, document.getElementById('content'));