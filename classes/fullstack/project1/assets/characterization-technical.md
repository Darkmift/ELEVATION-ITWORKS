# SERVER
## API
### /auth
  - login {Admin} > token
  - register {Admin}
### /builds
  - getBuildsPaginated (public)
  - getBuildById (public)
  - getBuildGroupedByWeek (public)(mongo and ask for count of grouped by startTime by week)
    {BuildCountWeekly = Record<string,number>} {week1:5,week2,0.....}
  - create/edit/delete {Build} (admin)
### middleware
  - checkJwt

## Types
```ts
//server/client
enum ROLE {
  1
  2
  3
}

enum STATUS {
  SUCCESS="success"
  FAILED="failed"
  CANCELED="canceled"
}

type BuildCountWeekly = Record<string,number>

// server
interface IAdminRegister {
  username:string
  firstName:string
  lastName:string
  role:Role
}

interface IAdmin extends IAdminRegister{
  password:string;
}

interface IBuild {
  buildId:string
  status:STATUS
  caption:string
  command:string
  startTime:string // a stringified date
  endTime:string // a stringified date
  errorsNumber:string
  warningsNumber:string
}

// client
type AdminRegister = {
  username:string
  firstName:string
  lastName:string
  role:Role
}

type Admin = AdminRegister & {password:string}

type Build = {
  buildId:string
  status:STATUS
  caption:string
  command:string
  startTime:string // a stringified date
  endTime:string // a stringified date
  errorsNumber:string
  warningsNumber:string
}
```
## Mongo/Mongoose
	- models
		-{Admin}
			-username (unique)
			-password
			-role (1|2|3)
			-firstName
			-lastname
		-{Build}
			-buildId (string) (2024.05.02.17) // check prev exists
			-status (success|failed|canceled)
			-caption (string)
			-command (string)
			-startTime (date)
			-endTime(date)
			-errorsNumber(number)
			-warningsNumber(number)

# CLIENT
## Http
    - BUILDS http					
    - /GET  	  builds?page&limit&sort[keyof Build]
    - /GET  	  builds/single/:id
    - /GET  	  builds/grouped
    - /POST 	  builds	{Build} header[token]
    - /PUT  	  builds/:id 	{Build} header[token]
    - /DELETE   builds/:id		header[token]
    - AUTH
    - /POST 	  auth/register {Admin}
    - /POST     auth/login	{Pick<Admin,username|password>}:{Omit<Admin,'password'>}
			
## Redux Store
```go
  - auth.slice
    - state
      -admin //admin.username (is loggedin)
    - reducers
      -setUser(Admin|null)
      
  - builds.slice
    - state
      -buildsPage
      -pagination:	{Pagination(page,limit,sort)}
      -buildsPerWeek:	{BuildCountWeekly} //graph
    - reducers
      -setBuilds({buildsPage:Build[],pagination:Pagination})
      -setBuildsPerWeek
```

# Design
Use Tailwind

# Aggregation (needs testing)
```js
db.builds.aggregate([
  {
    $group: {
      _id: {
        $isoWeek: "$startDate" // Group by ISO week number
      },
      count: { $sum: 1 }
    }
  },
  {
    $sort: { "_id": 1 } // Sort by week number
  },
  {
    $project: {
      week: { $concat: ["week", { $toString: "$_id" }] }, // Rename _id to week
      count: 1,
      _id: 0
    }
  }
])
```



# JSX
```JSX
Structure

App>
	Router>
		/Builds
			<Header>
				<Title text={'Builds'} size={text} className? />
			<Container>
				<Title text={'Total Builds'} size={text} className? />
				<Graph />
			</Container>			
			<Container>
				<Table>
					<THeader><TH><TD>{children}</TD></TR></THeader>
					<TBody><TR><TD>children</TD></TR></TBODY>
				</Table>
				<Footer>
					<Total>
					 	<NumberBadge number={82} isHighlighted={false} onClick? /> <p>Total</p>
					</Total>	
					<Pagination>
		 				 <PaginationArrow disabled={boolean} onClick={()=>//prev}>
						 	<IconLeft />
						 </PaginationArrow>
						 <NumberBadge 
                            number={1} 
                            isHighlighted={true} 
                            onClick={()=>setNumber(1)}
                          />
						 <NumberBadge 
                            number={2} 
                            isHighlighted={false} 
                            onClick={()=>setNumber(1)}
                          />
						 <PaginationArrow disabled={boolean} onClick={()=>//next}>
						 	<IconRight />
						 </PaginationArrow>
					</Pagination>
				</Footer>
			</Container>	
```












