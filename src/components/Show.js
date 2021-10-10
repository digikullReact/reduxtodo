import React from 'react'
import { useSelector } from 'react-redux'
import { Header, Image, Table } from 'semantic-ui-react'



function Show() {
    const state = useSelector(state => state.tasks)
    return (
        <Table basic='very' celled collapsing>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Task</Table.HeaderCell>
        <Table.HeaderCell>Delete</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    {
        state.value.map(ele=>(
            <Table.Body>
            <Table.Row>
              <Table.Cell>
                <Header as='h4' image>
                
                  <Header.Content>
                    {ele}
                  
                  </Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell>22</Table.Cell>
            </Table.Row>
           
           
          </Table.Body>

        ))
    }

   
  </Table>
    )
}

export default Show
