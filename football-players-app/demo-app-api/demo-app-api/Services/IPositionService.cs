using demo_app_api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace demo_app_api.Services
{
    public interface IPositionService
    {
        Task<IEnumerable<Position>> GetAllPosition();
    }
}
