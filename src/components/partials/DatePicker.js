import React from 'react';
import moment from 'moment';
import '../../assets/css/datePicker.css';

class DatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      year: this.getYear('YYYY'),
      month: this.getMonth('MMMM'),
      days: this.daysofweeks(this.getMonth('MMMM'), this.getYear('YYYY')),
      startDay: 0,
      endDay: 0,
      turn: true,
    }
  }
  isActive(color,a) {
    let testDays= (this.state.startDay.day <= color && this.state.endDay.day >= color) ? ' act':'';
    
    return 'day' + (testDays)
  }
  getYear(x) {
    return moment().format(x);
  }
  getMonth(x) {
    return moment().format(x);
  }
  getDay(x) {
    return moment().format(x);
  }
  daysofweeks(a, b) {
    let Days = [];
    let endofmonth = moment(b + '-' + a, 'YYYY-MMMM').daysInMonth();
    let startweek = 1;
    let endweek = 8;
    for (var j = 0; j < 4; j++) {
      Days.push({
        week: []
      })
      for (var i = startweek; i < endweek; i++) {
        Days[j].week.push(i)
      }
      startweek += 7; endweek += 7;
    }
    if (endweek - 7 < endofmonth + 1) {
      Days.push({ week: [] })
      for (i = endweek - 7; i < endofmonth + 1; i++)
        Days[4].week.push(i)
    }
    return (Days);
  }
  prevMonth(e) {
    let x = this.state.month;
    x = moment().month(x).format('M');
    x = moment().month(x - 2).format('MMMM');
    if (moment().month(this.state.month).format('M') === moment().month('January').format('M')) {
      this.setState({
        month: x,
        year: this.state.year - 1
      })
    } else {
      this.setState({
        month: x
      })
    }
    this.setState({
      days: this.daysofweeks(x, this.state.year)
    })
  }
  nextMonth(e) {
    let x = this.state.month;
    x = moment().month(x).format('M');
    x = moment().month(x).format('MMMM');
    if (moment().month(this.state.month).format('M') === moment().month('December').format('M')) {
      let y = this.state.year;
      y = moment().year(y).format('Y');
      y = parseInt(y);
      y += 1;
      y = moment().year(y.toString()).format('YYYY');
      this.setState({
        month: x,
        year: y
      })
    } else {
      this.setState({
        month: x
      })
    }
    this.setState({
      days: this.daysofweeks(x, this.state.year)
    })
  }
  picked() {
    this.props.dataD(this.state);
  }
  handleRange(e, index) {
    if (this.state.startDay === 0 && this.state.endDay === 0) {
      this.setState({
        startDay: {
          day: index,
          month: this.state.month
        },
        endDay: {
          day: index,
          month: this.state.month
        }
      })
    } else if (moment().month(this.state.startDay.month).format('M') > moment().month(this.state.month).format('M')) {
      this.setState({
        startDay: {
          day: index,
          month: this.state.month
        }
      })
    } else if (moment().month(this.state.endDay.month).format('M') < moment().month(this.state.month).format('M')) {
      this.setState({
        endDay: {
          day: index,
          month: this.state.month
        }
      })

    } else {
      if (this.state.startDay.day > index) {
        this.setState({
          startDay: {
            day: index,
            month: this.state.month
          }
        })
      } else if (this.state.endDay.day < index) {
        this.setState({
          endDay: {
            day: index,
            month: this.state.month
          }
        })
      } else {
        if (this.state.turn) {
          this.setState({
            startDay: {
              day: index,
              month: this.state.month
            },
            turn: !this.state.turn
          })
        } else if (!this.state.turn) {
          this.setState({
            endDay: {
              day: index,
              month: this.state.month
            },
            turn: !this.state.turn
          })
        }
      }
    }
  }
  render() {
    this.picked();
    return (
      <div className="datePicker">
        <div className="header">
          <input className="calendarbtn" type='button' onClick={(e) => this.prevMonth(e)} value='<' />
          <CalendarHeader month={this.state.month} year={this.state.year} />
          <input className="calendarbtn" type="button" onClick={(e) => this.nextMonth(e)} value='>' />
        </div>
        <div className="daysofCalendar">
          {
            this.state.days.map(
              (weeks, ind) => {
                return (
                  <div key={ind} className="week">
                    {
                      weeks.week.map((day, index) => {
                        return (
                          <div className={this.isActive(day,this.state.month)} key={index} onClick={(e) => this.handleRange(e, day)}>{day}</div>
                        )
                      })
                    }
                  </div>
                )
              }
            )
          }
        </div>
      </div>
    )
  }
}
function CalendarHeader(props) {
  return (
    <div className="cHeader">
      {props.month}, {props.year}
    </div>
  )
}
export default DatePicker;