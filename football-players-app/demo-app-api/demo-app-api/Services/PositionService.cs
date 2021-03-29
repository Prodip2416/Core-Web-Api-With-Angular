using demo_app_api.Data;
using demo_app_api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace demo_app_api.Services
{
    public class PositionService:IPositionService
    {
        private readonly DataContext _context;

        public PositionService(DataContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<IEnumerable<Position>> GetAllPosition()
        {
            return await _context.Positions.OrderBy(x => x.DisplayOrders).ToListAsync();
        }
    }
}
