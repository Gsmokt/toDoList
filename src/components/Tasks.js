import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";


const NoMaxWidthTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: "400px",
    backgroundColor: 'whitesmoke',
    color: 'black'
  },
});


const Tasks = ({ task, removeTask, dispatch, doneTask }) => {
  const handleDoneTask = () => {
    dispatch(doneTask(task));
    dispatch(removeTask(task.id));
  };

  const date = new Date(task.finishDate).toLocaleDateString();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "5px",
        backgroundColor: 'white',
        paddingLeft: '5px',
      }}
      key={task.id}
    >
      <NoMaxWidthTooltip title={<Typography sx={{fontSize: '18px'}} variant="body1">
          {task.task}{" "}
          {task.priority ? (
            <span style={{ color: "red", fontSize: "18px" }}>*</span>
          ) : null}
          <Typography sx={{fontSize: '18px'}} variant="body1" >Must be done to: {date}</Typography>
        </Typography>}>
        <Typography sx={{fontSize: '23px'}} noWrap variant="body1">
          {task.task}{" "}
          {task.priority ? (
            <span style={{ color: "red", fontSize: "23px" }}>*</span>
          ) : null}
        </Typography>
      </NoMaxWidthTooltip>
      <Stack direction="row" spacing={0.5}>
        <Button
          size="small"
          startIcon={<DoneIcon />}
          variant="contained"
          color="success"
          onClick={handleDoneTask}
        >
          Done
        </Button>
        <Button
          startIcon={<DeleteIcon />}
          size="small"
          variant="contained"
          color="error"
          onClick={() => dispatch(removeTask(task.id))}
        >
          Delete
        </Button>
      </Stack>
    </Box>
  );
};

export default Tasks;

// style={{color: task.priority ? 'red' : 'black'}}
