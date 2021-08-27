import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './References.css'
import BackHeader from '../BackHeader/BackHeader'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);
function createData( SrNo, ReferenceLink) {
  return { SrNo, ReferenceLink };
}

const rows = [
  createData('1', 'https://www.powtoon.com/my-powtoons/'),
  createData('2', 'www.slidesgo.com'),
  createData('3', 'www.googleslides.com'),
  createData('4', 'www.freepik.com'),
  createData('5', 'www.educaplay.com'),
  createData('6', 'positivepsychology.com'),
  createData('7', 'https://booksite.elsevier.com/9780123745170/Chapter%204/Chapter_4_Worksheet_4.13.pdf'),
  createData('8', 'https://www.viacharacter.org'),
  createData('9', 'https://suicidepreventionlifeline.org/wp-content/uploads/2016/08/Brown_StanleySafetyPlanTemplate.pdf'),
  createData('10', 'https://www.bestow.com/blog/gratitude-games/'),
  createData('11', 'Kaiser Stacy (2014)- How hopeful are you?'),
  createData('12', 'A positive psychological approach to suicide – Hirsch et al (2018)')
];
function References({ loggedIn, onLogin, user, setUser,updatedModuleStatus,changeUpdatedModuleStatus }) {
    const classes = useStyles();
  
  return (
    <>
       <BackHeader
            loggedIn={loggedIn}
                onLogin={onLogin}
                user={user}
                setUser={setUser}
            updatedModuleStatus={updatedModuleStatus}
            changeUpdatedModuleStatus={changeUpdatedModuleStatus} />
      <div id="helpline" className="main-helpline">
      
      <TableContainer component={Paper} className="cont-helpline">
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow className="main-row">
              <StyledTableCell className="main-font" align="center">Sr No</StyledTableCell>
              <StyledTableCell className="main-font" align="center">Reference Link</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <TableRow className="main-row">
                <StyledTableCell align="center" style={{textAlign:"center"}}>{row.SrNo}</StyledTableCell>
                <StyledTableCell align="center" style={{textAlign:"center"}}>{row.ReferenceLink}</StyledTableCell>
                </TableRow>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
        {/* <p>NOTE:  There is no national distress helpline number in India as yet, However, there are many organizations that collaborate with the government and extend counselling services and suicide prevention helplines. The number 104 is used in Assam, Karnataka, Tamil Nadu, Odisha and Punjab for these services.
NIMHANS COVID-19 Helpline number is also extending a helping hand, their contact info is – 080 46110007
</p> */}
      </TableContainer>
        </div>
       
      </>
    );
  }
export default References