import React, { Component } from 'react'
import {
  Grid, Table, TableHeaderRow
} from '@devexpress/dx-react-grid-material-ui'
import Paper from 'material-ui/Paper';


export class PizzeriasTable extends Component {
  
  render() {

    return (
      <Paper>
        <Grid
          rows={[
            { nimi: 'Nattarin testikebab', arvio: 'plussia ja miinuksia plussia ja miinuksia plussia ja miinuksia' },
          ]}
          columns={[
            { name: 'nimi', title: 'Nimi' },
            { name: 'arvio', title: 'Arvio' },
          ]}>
          <Table />
          <TableHeaderRow />
        </Grid>
      </Paper>
    )
  }
}

export default PizzeriasTable
