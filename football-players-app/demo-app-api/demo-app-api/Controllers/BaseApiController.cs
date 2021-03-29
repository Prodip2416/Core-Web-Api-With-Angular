using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace demo_app_api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BaseApiController:Controller
    {
    }
}
