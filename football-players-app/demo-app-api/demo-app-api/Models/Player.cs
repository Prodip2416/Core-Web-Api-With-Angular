using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace demo_app_api.Models
{
    public class Player
    {
        public int Id { get; set; }
        public int? ShirtNo { get; set; }
        public string Name { get; set; }
        public int? PositionId { get; set; }
        public int? Appearances { get; set; }
        public int? Goals { get; set; }

        public Position Position { get; set; }
    }
}
