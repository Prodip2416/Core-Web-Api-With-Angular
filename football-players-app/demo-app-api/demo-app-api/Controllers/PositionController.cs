using demo_app_api.Models;
using demo_app_api.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace demo_app_api.Controllers
{
    public class PositionController : BaseApiController
    {
        private readonly IPositionService _positionservice;
        public PositionController(IPositionService positionService)
        {
            _positionservice = positionService;
        }

        [HttpGet]
        public async Task<IEnumerable<Position>> Get()
        {
            return await _positionservice.GetAllPosition();
        }
    }
}
