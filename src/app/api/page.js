
import { exec } from 'child_process';

export default function handler(req, res) {
  // Example command: 'ls' - lists directory contents in UNIX-like systems
   
  exec('ls', (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return res.status(500).json({ error: `exec error: ${error.message}` });
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
      return res.status(500).json({ error: `stderr: ${stderr}` });
    }
    res.status(200).json({ result: stdout });
  });
}
