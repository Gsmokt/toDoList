import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import Stack from "@mui/material/Stack";

const NoMaxWidthTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: "400px",
    backgroundColor: "whitesmoke",
    color: "black",
  },
});

const DoneTasks = ({ task, removeDoneTask, dispatch }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "5px",
        paddingLeft: '5px',
      }}
      key={task.id}
    >
     <NoMaxWidthTooltip title={<Typography sx={{fontSize: '18px'}} variant="body1">
          {task.task}{" "}
          {task.priority ? (
            <span style={{ color: "red", fontSize: "18px" }}>*</span>
          ) : null}
        </Typography>}>
      <Typography noWrap sx={{fontSize: '18px', textDecoration: 'line-through'}} variant="body1">
        {task.task}{" "}
        {task.priority ? (
          <span style={{ color: "red", fontSize: "23px" }}>*</span>
        ) : null}
      </Typography>
      </NoMaxWidthTooltip>
      <Stack direction="row" spacing={0.5}>
      <Button
        startIcon={<DeleteIcon />}
        size="small"
        variant="contained"
        color="error"
        onClick={() => dispatch(removeDoneTask(task.id))}
      >
        Delete
      </Button>
      </Stack>
    </Box>
  );
};

export default DoneTasks;
