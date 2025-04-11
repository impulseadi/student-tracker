import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  company: String,
  role: String,
  appliedDate: String,
  link: String,
  status: {
    type: String,
    enum: ["Applied", "Interview", "Offer", "Rejected"],
    default: "Applied",
  },
});

export default mongoose.model("Job", jobSchema);
