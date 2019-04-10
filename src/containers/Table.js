import React, { Component } from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CustomModal from '../components/CustomModal';
import {Button} from 'reactstrap';
import Forbidden from './Forbidden';
import Config from "../Config"


const TableHeader = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>No.</TableCell>
        <TableCell align="center">Proceso</TableCell>
        <TableCell align="center">Log Message</TableCell>
        <TableCell align="center">Status</TableCell>
        <TableCell align="center">Fecha</TableCell>
      </TableRow>
    </TableHead>
  )
}
function CustomTableBody (props) {
  props.rows.map((r) => (console.log(r)));
  return (
    <TableBody>
    {props.rows.map(row => (
            <TableRow key={row.BitacoraID}>
            <TableCell align="left">{row.BitacoraID}</TableCell>
              <TableCell component="th" scope="row" align="center">
                {row.Nombre_Proceso}
              </TableCell>
              <TableCell align="center">{row.Log_Message}</TableCell>
              <TableCell align="center">{row.Status === 1? <Button color="success" style={{cursor:'default'}}> Success </Button>:
                <CustomModal title={row.Log_Message} imagePath={row.Path_Image} errorText={row.Error}/>}</TableCell>
              <TableCell align="center">{row.Create_Time}</TableCell>
            </TableRow>
          ))}
          </TableBody>
  )
}

class CustomTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      logs: [],
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  componentDidMount() {
    fetch(Config.API+"bitacora")
      .then(response => response.json())
      .then(data =>
        this.setState({logs:data.data})
        ).catch(err => {
          console.log(err);
          this.setState({logs:[]})
        });
  }

  render() {
    return (
      this.props.isAuthenticated?
        <Table >
          <TableHeader />
          <CustomTableBody rows={this.state.logs}/>
        </Table>
      : <Forbidden />
    )
  }
}

export default CustomTable
