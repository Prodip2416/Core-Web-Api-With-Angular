using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace demo_app_api.Models
{
    public class PlayersDetails
    {     
        public int ID { get; set; }
        public int ShirtNo { get; set; }
        public string Name { get; set; }
        public string PositionName { get; set; }
        public int Appearances { get; set; }
        public int Goals { get; set; }
    }
}
