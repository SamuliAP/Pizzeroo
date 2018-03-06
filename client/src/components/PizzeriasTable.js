import React, { Component } from 'react'
import {
  Grid, Table, TableHeaderRow
} from '@devexpress/dx-react-grid-material-ui'
import Paper from 'material-ui/Paper';
import requestController from '../clientControllers/requestController'

class PizzeriasTable extends Component {

  constructor() {
    super()
    this.state = { 
      pizzerias: [],
      gridRows:  [],
    }
  }

  componentWillMount = () => this.setState({ pizzerias: this.getPizzeriasData() })

  getPizzeriasData = () => {
    requestController.get("api/pizzerias")
      .then(response => response.json())
      .catch(error => null /* TODO: error handling */)
      .then(data => {
        if (!data.error) {
          this.setState({ pizzerias: data.data }, this.createRows)
        } else {
          this.setState({ pizzerias: [] }, this.createRows)
        }
      })
  }

  createRows = () => (
    this.setState ({
      gridRows: this.state.pizzerias.map(value => ({
        nimi: value.name, 
        arvio: value.notes
      }))
    })
  )

  render() {
    return (
      <Paper>
        <Grid
          rows={this.state.gridRows}
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
