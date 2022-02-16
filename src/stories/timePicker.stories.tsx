import Timepicker from "../components/common/TimePicker";

export default {
  title: "Time Picker",
  component: Timepicker,
};

export const DefaultTimePicker = () => <Timepicker />;

export const TimePickerWithParentWidth = () => (
  <div style={{ width: "300px" }}>
    <Timepicker />
  </div>
);
