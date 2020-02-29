<template>
  <div class="cqb-filter-left">
    <div class="cqb-filter-left__filter-map">
      <span class="cqb-filter-left__filter-btn">
        <svg
          width="16"
          height="15"
          viewBox="0 0 16 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="0.5"
            y1="1.5"
            x2="15.5"
            y2="1.5"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <line
            x1="0.5"
            y1="7.5"
            x2="15.5"
            y2="7.5"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <line
            x1="0.5"
            y1="13.5"
            x2="15.5"
            y2="13.5"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <circle cx="11.5" cy="1.5" r="1.5" fill="white" />
          <circle cx="3.5" cy="7.5" r="1.5" fill="white" />
          <circle cx="9.5" cy="13.5" r="1.5" fill="white" />
        </svg>

        <span class="cqb-filter-left__filter-text">Reserva</span>
      </span>
    </div>
  </div>
  <!-- <div className="cqb-filter-left">
            <div className="cqb-filter-left__wrap">
                <form className={`cqb-filter-left__from ${filtersVisible ? 'active' : ''}`} onSubmit={handleSubmit}>
                    {filtersColListDesk}
                </form>
            </div>

            <div className={`cqb-filter-left__filter-map ${filtersVisible ? 'active' : ''}`}>
                <span
                    className={`cqb-filter-left__filter-btn ${activeFilters > 0 ? ' wide' : ''}`}
                    onClick={toggleFiltersBlock}
                >
                    <span className="cqb-filter-left__filter-text">Filters</span>
                    {activeFilters > 0 && <span className="cqb-filter-left__filter-active">{activeFilters}</span>}
                </span>
            </div>
  </div>-->
</template>
<style>
.cqb-filter-left {
  position: static;
  margin: 0;
  top: 0;
  overflow: visible;
}
.cqb-filter-left__filter-map {
  display: flex;
  cursor: pointer;
  position: fixed;
  min-width: 12.25rem;
  height: 4.0625rem;
  left: 50%;
  bottom: 3.125rem;
  padding: 0 0.6875rem 0 1.125rem;
  align-items: center;
  justify-content: center;
  background: #0797ff;
  border-radius: 2.125rem;
  transform: translateX(-50%);
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.25);
  z-index: 5;
}
.cqb-filter-left__filter-btn {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 5rem;
  height: 2.6875rem;
  color: #ffffff;
  font-size: 1.125rem;
  margin-left: -0.4375rem;
}
.cqb-filter-left__filter-text {
  font-size: 19px;
  margin-left: 5px;
}
</style>

