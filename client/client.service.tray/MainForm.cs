using System.Diagnostics;
using System.Drawing;
using System.IO;
using System.Reflection;
using System.Windows.Forms;

namespace client.service.tray
{
    public partial class MainForm : Form
    {
        private NotifyIcon notifyIcon = null;
        private Process proc;
        public MainForm()
        {
            ShowInTaskbar = false;
            this.WindowState = FormWindowState.Minimized;
            this.Hide();
            InitializeComponent();
            InitialTray();
            //OpenExe();
        }

        private void InitialTray()
        {
            notifyIcon = new NotifyIcon();
            notifyIcon.BalloonTipText = "p2p-tunnel���̳���������";
            notifyIcon.Text = "p2p-tunnel���̳���";

            notifyIcon.Icon = new Icon(Assembly.GetExecutingAssembly().GetManifestResourceStream(@"client.service.tray.logo.ico"));
            notifyIcon.Visible = true;

            notifyIcon.ContextMenuStrip = new ContextMenuStrip();
            notifyIcon.ContextMenuStrip.Items.Add("����ҳ��");
            notifyIcon.ContextMenuStrip.Items.Add("�˳�");
            notifyIcon.ContextMenuStrip.ItemClicked += ContextMenuStrip_ItemClicked;
            notifyIcon.ContextMenuStrip.MouseDoubleClick += ContextMenuStrip_MouseDoubleClick;
        }

        private void ContextMenuStrip_MouseDoubleClick(object sender, MouseEventArgs e)
        {
            OpenWeb();
        }
        private void ContextMenuStrip_ItemClicked(object sender, ToolStripItemClickedEventArgs e)
        {
            switch (e.ClickedItem.Text)
            {
                case "�˳�":
                    this.Close();
                    break;
                case "����ҳ��":
                    OpenWeb();
                    break;
                default:
                    break;
            }
        }

        private void OpenExe()
        {
            try
            {
                string dir = Path.Combine(System.IO.Directory.GetCurrentDirectory());
                string file = Path.Combine(dir, "client.service.exe");

                proc = new Process();
                proc.StartInfo.WorkingDirectory = dir;
                proc.StartInfo.UseShellExecute = false;
                proc.StartInfo.CreateNoWindow = true;
                proc.StartInfo.WindowStyle = ProcessWindowStyle.Hidden;
                proc.StartInfo.FileName = file;
                proc.StartInfo.RedirectStandardInput = true;
                proc.StartInfo.RedirectStandardOutput = true;
                proc.StartInfo.RedirectStandardError = true;
                proc.StartInfo.UseShellExecute = false;
                proc.StartInfo.CreateNoWindow = true;

                proc.Start();
                // proc.StandardInput.AutoFlush = true;
                //proc.StandardInput.WriteLine("client.service.exe");
            }
            catch (System.Exception ex)
            {
                notifyIcon.BalloonTipText = ex.Message;
                notifyIcon.ShowBalloonTip(1000);
            }
        }

        private void OpenWeb()
        {

            Web web = new Web("http://127.0.0.1:8080");
            web.Show();
        }

        private new void Closing(object sender, FormClosingEventArgs e)
        {
            proc?.Close();
            proc?.Dispose();
        }
    }
}