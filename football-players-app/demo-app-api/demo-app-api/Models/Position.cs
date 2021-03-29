using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace demo_app_api.Models
{
    public class Position
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int? DisplayOrders { get; set; }
    }
}
