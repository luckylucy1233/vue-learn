<template>
	<div class="mymodal">
		<transition>
			<div class="background">
				<div class="box">
					<div class="container">
						<div class="header">
							<slot></slot>
						</div>
						<div class="body">
							<p>body</p>
						</div>
						<div class="footer">
							<button type="button" @click="$emit('close')">close</button>
						</div>
					</div>
				</div>
			</div>
		</transition>
	</div>
</template>

<style>
	.background {
		position: fixed;
		z-index: 999;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, .5);
		display: table;
		transition: opacity .20s ease;
	}
	
	.box {
		display: table-cell;
		vertical-align: middle;
		
	}
	
	.container {
		width: 300px;
		height: 300px;
		margin: 0 auto;
    background-color:white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .20s ease;
	}
	
	.header {
		font-color: red;
	}

.mymodal-enter {
  opacity: 0;
}

.mymodal-leave-active {
  opacity: 0;
}

.mymodal-enter .mymodal-container,
.mymodal-leave-active .mymodal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>