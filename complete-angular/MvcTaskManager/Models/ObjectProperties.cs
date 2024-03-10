namespace MvcTaskManager.Models
{
    public class ObjectProperties
    {
        public  string ObjectName { get; set; }
        public  List<string> Properties { get; set; }

        public ObjectProperties(string name, List<string> props) { 
            ObjectName = name;
            Properties = props;
        }
    }
}
